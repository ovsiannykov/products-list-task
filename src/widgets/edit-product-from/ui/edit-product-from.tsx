import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'
import { z } from 'zod'

import { TProduct, useProducts } from '@entities/product'
import { useDeleteProduct } from '@features/product'
import { useErrorContext } from '@shared/core'
import { generateRandomId } from '@shared/helpers'
import { BackButton, Button, Input, Switch } from '@shared/ui'

import TrashSvg from '../assets/trash.svg'

import { productSchema } from '../model'
import styles from './edit-product-from.styles'

type FormValues = z.infer<typeof productSchema>
type TEditProductFormProps = {
  product?: TProduct
}

export const EditProductForm = ({ product }: TEditProductFormProps) => {
  const { bug } = useErrorContext()
  const navigation = useNavigation()
  const { goBack } = navigation
  const { addProduct, updateProduct } = useProducts()
  const { deleteProduct } = useDeleteProduct()
  const isEditMode = !!product

  const deleteProductHandler = async () => {
    if (!product) {
      return
    }

    await deleteProduct(product.id)
    goBack()
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={goBack} />,
      title: isEditMode ? 'Edit product' : 'Create product',
      headerRight: isEditMode
        ? () => (
            <TouchableOpacity onPress={deleteProductHandler}>
              <TrashSvg width={24} height={24} />
            </TouchableOpacity>
          )
        : undefined,
    })
  }, [])

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name ?? '',
      amount: product?.amount ?? 1,
      bought: product?.bought ?? false,
    },
  })

  const { mutateAsync } = useMutation({
    mutationFn: async (data: TProduct) => {
      if (isEditMode && product) {
        await updateProduct({ ...data, id: product.id })
      } else {
        await addProduct(data)
      }
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await mutateAsync({ ...data, id: product?.id ?? generateRandomId() })
    if (!isEditMode) {
      setValue('name', '')
      setValue('amount', 1)
      setValue('bought', false)
    }
    goBack()
  }

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <Input
            label="Name"
            value={value}
            onChange={onChange}
            error={errors.name?.message}
            style={styles.form_input}
            placeholder="Enter product name"
          />
        )}
      />
      <Controller
        control={control}
        name="amount"
        render={({ field: { value, onChange } }) => (
          <Input
            label="Amount"
            value={value === 0 ? '' : value?.toString()}
            onChange={(text: string) => {
              if (/^\d*$/.test(text)) {
                onChange(text === '' ? 0 : parseInt(text, 10))
              } else {
                bug('Amount must be a number')
                onChange(0)
              }
            }}
            keyboardType="numeric"
            error={errors.amount?.message}
            placeholder="Enter amount"
          />
        )}
      />

      {isEditMode && (
        <View style={styles.switch_container}>
          <Text style={styles.switch_title}>Already purchased:</Text>
          <Controller
            control={control}
            name="bought"
            render={({ field: { value, onChange } }) => (
              <Switch
                isOn={value ?? false}
                handleToggle={() => onChange(!value)}
              />
            )}
          />
        </View>
      )}

      <Button onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        {isEditMode ? 'Update Product' : 'Add Product'}
      </Button>
    </View>
  )
}
