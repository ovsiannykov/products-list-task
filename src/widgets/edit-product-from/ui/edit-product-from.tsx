import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'

import { TProduct, useProducts } from '@entities/product'
import { BackButton, Button, Input, Switch } from '@shared/ui'

import { productSchema } from '../model'
import styles from './edit-product-from.styles'

type FormValues = z.infer<typeof productSchema>

export const EditProductForm = () => {
  const navigation = useNavigation()
  const { goBack } = navigation
  const { addProduct } = useProducts()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={goBack} />,
    })
  }, [])

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      amount: 1,
      bought: false,
    },
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: Omit<TProduct, 'id'>) => addProduct(data),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await mutateAsync(data)
    setValue('name', '')
    setValue('amount', 1)
    setValue('bought', false)
  }

  return (
    <View>
      <Input
        label="Name"
        value={watch('name')}
        onChange={(text: string) => setValue('name', text)}
        error={errors.name?.message}
        style={styles.form_input}
        placeholder="Enter product name"
      />

      <Input
        label="Amount"
        value={String(watch('amount'))}
        onChange={(text: string) => setValue('amount', Number(text))}
        keyboardType="numeric"
        error={errors.amount?.message}
        placeholder="Enter amount"
      />

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

      <Button onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        Add Product
      </Button>
    </View>
  )
}
