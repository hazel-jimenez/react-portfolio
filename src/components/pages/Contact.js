import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur',});
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("firstName", {required: "Required", maxLength: 80})} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input type="text" placeholder="Last name" {...register("Last name", {required: "This field is required", maxLength: 100})} />

      <input type="text" placeholder="Email" {...register("email", {required: "NEED THIS", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }})} />
          {errors.email && <p>{errors.email.message}</p>}
      <textarea type="text" placeholder="Message Here" {...register("Message", {required: true,})} />


      <input type="submit" />
    </form>

    </div>
  );
}

