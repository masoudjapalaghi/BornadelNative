import React from 'react'
import { useFormikContext } from 'formik';
import CustonButton from '../shared/CustonButton'

const SubmitButton = ({title}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <CustonButton title={title} onPress={handleSubmit} />

  )
}

export default SubmitButton
