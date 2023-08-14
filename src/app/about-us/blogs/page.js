'use client'
import { useState } from 'react';
import styles from './stepper.module.css'

const steps = [
  {
    id: 'step1',
    title: 'General Information',
    fields: [
      { label: 'Name', name: 'name' },
      { label: 'Email', name: 'email' },
      { label: 'Business Name', name: 'businessName' },
      { label: 'Number of Employees', name: 'numEmployees', type: 'number' },
    ],
    selectionLabel: 'Business Type',
    selectionOptions: [
      {
        label: 'Retail',
        subSelections: ['Clothing', 'Electronics', 'Home Goods'],
      },
      {
        label: 'Manufacturing',
        subSelections: ['Automotive', 'Textile', 'Pharmaceutical'],
      },
      {
        label: 'Technology',
        subSelections: ['Software', 'Hardware', 'Telecommunications'],
      },
      { label: 'Other', subSelections: [] },
    ],
  },
  {
    id: 'step2',
    title: 'Building',
    fields: [
      { label: 'Electricity', name: 'field1', type: 'number' },
      { label: 'Field 2', name: 'field2', type: 'number' },
      { label: 'Field 3', name: 'field3', type: 'number' },
    ],
  },
  {
    id: 'step3',
    title: 'Step 3',
    fields: [
      { label: 'Field A', name: 'fieldA', type: 'number' },
      { label: 'Field B', name: 'fieldB', type: 'number' },
      { label: 'Field C', name: 'fieldC', type: 'number' },
    ],
  },
];

export default function CarbonFootprintCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const { id: currentStepId, title: currentStepTitle, fields: currentStepFields } = steps[currentStep];
  const [formValues, setFormValues] = useState({});

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const submitForm = () => {
    // Perform necessary calculations with formValues
    console.log('Form submitted:', formValues);
    // Reset the formValues if needed
    setFormValues({});
  };

  return (
    <div>
    <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-black"> {currentStepTitle}</h3>
      <div className="pl-8">
        
        {currentStepFields.map((field) => (
          <form  key={field.name}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{field.label}</label>
            <input id="fullname" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
              type={field.type || 'text'}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
            />
          </div>
          </form>
        ))}
        {currentStepId === 'step1' && (
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{steps[currentStep].selectionLabel}</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="industry"
              value={formValues.industry || ''}
              onChange={handleInputChange}
            >
              <option value="" >Select Size</option>
              {steps[currentStep].selectionOptions.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
            {formValues.industry && (
              <div>
                <label>Sub-selection:</label>
                <select
                  name="subIndustry"
                  value={formValues.subIndustry || ''}
                  onChange={handleInputChange}
                >
                  <option value="">-- Please select --</option>
                  {steps[currentStep].selectionOptions
                    .find((option) => option.label === formValues.industry)
                    .subSelections.map((subOption) => (
                      <option key={subOption} value={subOption}>
                        {subOption}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        )}
      </div>
      <div >
        <div className="pl-8 mt-4">
          
            {currentStep > 0 && (
              <button onClick={prevStep} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
            )}
         
            {currentStep < steps.length - 1 ? (
              <button onClick={nextStep} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
            ) : (
              <button onClick={submitForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            )}
          
        </div>
      </div>
    </div>
  );
}
