'use client'
import { useState } from 'react';

const CarbonFootprintCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    numEmployees: '',
    businessType: '',
    electricitySource: '',
    energySource: '',
    electricityConsumed: '',
    buildingArea: '',
    cookingSource: '',
    cookingOtherSource: '',
    refrigetorTypes: '',
    useCases: [],
    vehiclesType: '',
    vehiclesBrand: '',
    flightType: '',
    flightFrom: '',
    flightTo: '',
    flightClass: '',
    numTrips: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  const handleAddUseCase = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      useCases: [...prevFormData.useCases, '']
    }));
  };

  const handleUseCaseChange = (index, event) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const updatedUseCases = [...prevFormData.useCases];
      updatedUseCases[index] = value;
      return {
        ...prevFormData,
        useCases: updatedUseCases
      };
    });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">General Information</h1>
            <div className="pl-8">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
              <input id="fullname" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
              <input id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="businessname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Business Name</label>
              <input id="business" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter business name" required
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <label htmlFor="numofemployee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Number of Employees</label>
              <input id="number" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
                type="number"
                name="numEmployees"
                value={formData.numEmployees}
                onChange={handleInputChange}
              />
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Business Type</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
              >
                <option value="micro">Micro</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Building</h1>
            <div className="pl-8">
              <label htmlFor="sourceType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Source of Electricity</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="electricitySource"
                value={formData.electricitySource}
                onChange={handleInputChange}
              >
                <option value="renewal">Renewable</option>
                <option value="non-renewal">Non-Renewable</option>
              </select>
              {formData.electricitySource === 'non-renewal' && (
                <div>
                  <label htmlFor="sources" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Energy Source</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="energySource"
                    value={formData.energySource}
                    onChange={handleInputChange}
                  >
                    <option value="coal">Coal</option>
                    <option value="natural-gas">Natural Gas</option>
                    <option value="bio-gas">Bio Gas</option>
                  </select>
                </div>
              )}
              <label htmlFor="numofConsumedElecctricity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Electricity Consumed (in kWh/month)</label>
              <input id="number" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
                type="number"
                name="electricityConsumed"
                value={formData.electricityConsumed}
                onChange={handleInputChange}
              />
              <label htmlFor="buildingArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Building Area (in square meters)</label>
              <input id="buildingArea" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
                type="number"
                name="buildingArea"
                value={formData.buildingArea}
                onChange={handleInputChange}
              />
              <label htmlFor="cookingSource" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cooking Source</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="cookingSource"
                value={formData.cookingSource}
                onChange={handleInputChange}
              >
                <option value="electricity">Electricity</option>
                <option value="other">Other</option>
              </select>
              {formData.cookingSource === 'other' && (
                <div>
                  <label htmlFor="cookingOtherSource" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cooking Other Source</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="cookingOtherSource"
                    value={formData.cookingOtherSource}
                    onChange={handleInputChange}
                  >
                    <option value="coal">Coal</option>
                    <option value="lpg">LPG</option>
                    <option value="biogas">Biogas</option>
                    <option value="propane">Propane</option>
                  </select>
                </div>
              )}
              <div>
                  <label htmlFor="refrigetorTypes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Refrigetors Type</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="refrigetorTypes"
                    value={formData.refrigetorTypes}
                    onChange={handleInputChange}
                  >
                    <option>Select Types</option>
                    <option value="domesticRefrigerational">Domestic Refrigeration</option>
                    <option value="commercialRefrigeration">Commercial Refrigeration</option>
                    <option value="industrialRefrigeration">Industrial Refrigeration</option>
                    <option value="transportRefrigeration">Transport Refrigeration</option>
                    <option value="mobileAirConditioning">Mobile Air Conditioning</option>
                    <option value="stationaryAirConditioning">Stationary Air Conditioning</option>
                    <option value="chillers">Chillers</option>
                  </select>
                  
                </div>
              
              {formData.useCases.map((useCase, index) => (
                <div key={index}>
                  <label htmlFor="refrigetorTypes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Second Refrigetor</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="refrigetorTypes"
                    value={formData.refrigetorTypes}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option>Select Types</option>
                    <option value="domesticRefrigerational">Domestic Refrigeration</option>
                    <option value="commercialRefrigeration">Commercial Refrigeration</option>
                    <option value="industrialRefrigeration">Industrial Refrigeration</option>
                    <option value="transportRefrigeration">Transport Refrigeration</option>
                    <option value="mobileAirConditioning">Mobile Air Conditioning</option>
                    <option value="stationaryAirConditioning">Stationary Air Conditioning</option>
                    <option value="chillers">Chillers</option>
                  </select>
                  <input id="numberofrefrigetors" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter no of refrigetors" required
                    type="number"
                    value={useCase}
                    onChange={(event) => handleUseCaseChange(index, event)}
                  />
                </div>
              ))}
              
              <button type="button" onClick={handleAddUseCase}  className="mt-4 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                Add More
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Vehicles</h1>
            <div className="pl-8">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vehicle Type</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="vehiclesType"
                value={formData.vehiclesType}
                onChange={handleInputChange}
              >
              <option>Select Vehicle</option>
                <option value="4-wheelers">4-Wheelers</option>
                <option value="2-wheelers">2-Wheelers</option>
              </select>
              {formData.vehiclesType === '4-wheelers' && (
                <div>
                  <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vehicle Brand</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="vehiclesBrand"
                    value={formData.vehiclesBrand}
                    onChange={handleInputChange}
                  >
                    <option value="truck">Truck</option>
                    <option value="car">Car</option>
                    <option value="bus">Bus</option>
                  </select>
                </div>
              )}
              {formData.vehiclesType === '2-wheelers' && (
                <div>
                  <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vehicle Brand</label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="vehiclesBrand"
                    value={formData.vehiclesBrand}
                    onChange={handleInputChange}
                  >
                    <option value="motorcycle">Motorcycle</option>
                    <option value="scooter">Scooter</option>
                  </select>
                </div>
              )}
            </div>
            </div>
          );
        case 4:
          return (
            <div>
            <h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Flight</h1>
            <div className="pl-8">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Flight Type</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="flightType"
                value={formData.flightType}
                onChange={handleInputChange}
              >
                <option value="return">Return Flight</option>
                <option value="one-way">One-way Flight</option>
              </select>
              <label htmlFor="flightfrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">From</label>
              <input id="flightfrom" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter current location" required
                type="text"
                name="flightFrom"
                value={formData.flightFrom}
                onChange={handleInputChange}
              />
              <label htmlFor="flightto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">To</label>
              <input id="flightto" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter destination location" required
                type="text"
                name="flightTo"
                value={formData.flightTo}
                onChange={handleInputChange}
              />
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Class</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="flightClass"
                value={formData.flightClass}
                onChange={handleInputChange}
              >
                <option value="economy">Economy Class</option>
                <option value="premium-economy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
                <option value="unknown">Average Unknown Class</option>
              </select>
              <label htmlFor="numtrips" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Number of Trips</label>
              <input id="numtrips" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter no of trips" required
                type="number"
                name="numTrips"
                value={formData.numTrips}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Results</h1>
            <div className="pl-8">
              {/* Additional fields for Step 5 */}
              <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Field 1</label>
              <input id="field1" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text" required
                type="text"
                name="field1"
                value={formData.field1}
                onChange={handleInputChange}
              />
              <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Field 2</label>
              <input id="field2" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Text" required
                type="text"
                name="field2"
                value={formData.field2}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      default:
      return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderStepContent()}
        <div className="pl-8 mt-4">
        <button type="button" onClick={handlePrevious} disabled={step === 1} className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Previous
        </button>
        {step < 5 && (
          <button type="button" onClick={handleNext} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next
          </button>
        )}
        {step === 5 && (
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Calculate
          </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CarbonFootprintCalculator;
