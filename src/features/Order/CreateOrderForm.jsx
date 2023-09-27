import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import { useSelector } from 'react-redux';
import { getTotalCartPrice } from '../Cart/cartSlice';

function CreateOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const price = useSelector(getTotalCartPrice);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.name?.message} label="Your name">
        <Input
          placeholder="Your name"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow error={errors?.phone?.message} label="Your phone">
        <Input
          placeholder="Phone number"
          id="phone"
          {...register('phone', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow error={errors?.address?.message} label="Your address">
        <Input
          placeholder="Address"
          id="address"
          {...register('address', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow>
        <Button>Order now for ${price}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateOrderForm;
