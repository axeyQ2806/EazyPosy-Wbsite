import { CButton, CForm, CFormInput, CFormSelect } from "@coreui/react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <CForm>
        <CFormInput
          type='text'
          id='name'
          placeholder='Name'
          aria-describedby='exampleFormControlInputHelpInline'
        />
        <div className='flex-comp'>
          <CFormInput
            type='tel'
            id='number'
            placeholder='Phone Number'
            aria-describedby='exampleFormControlInputHelpInline'
          />
          <CFormInput
            type='email'
            id='email'
            placeholder='email'
            aria-describedby='exampleFormControlInputHelpInline'
          />
        </div>
        <div className='flex-comp'>
          <CFormInput
            type='text'
            id='restName'
            placeholder='Restaurant Name'
            aria-describedby='exampleFormControlInputHelpInline'
          />
          <CFormSelect
            aria-label='Default select example'
            options={[
              "Restaurant Status",
              { label: "Established", value: "1" },
              { label: "Newly Open", value: "2" },
              { label: "Opening Soon", value: "3" },
            ]}
          />
        </div>

        <CFormSelect
          aria-label='Default select example'
          options={[
            "Restaurant Status",
            { label: "Fine Dine", value: "1" },
            { label: "Cafe", value: "2" },
            { label: "QSR", value: "3" },
            { label: "Cloud Kitchen", value: "4" },
            { label: "Food Court", value: "5" },
            { label: "Large Chain", value: "6" },
            { label: "Bakery", value: "7" },
            { label: "Ice Creams & Desserts", value: "8" },
            { label: "Bar and Brewery", value: "9" },
            { label: "Pizzeria", value: "10" },
            { label: "Other", value: "11" },
          ]}
        />
        <CButton color='primary' type='submit'>
          Submit
        </CButton>
      </CForm>
    </>
  );
};

export default Form;
