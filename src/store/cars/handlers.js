export const handlePending = state => {
  return {
    ...state,
    isLoading: true,
    error: '',
  };
};
export const handleRejected = (state, { error }) => {
  return {
    ...state,
    isLoading: false,
    error: error.message,
  };
};
export const handleFullfieldCars = (state, { payload }) => {
  return {
    ...state,
    cars: [...state.cars, ...payload],
    isLoading: false,
  };
};

export const handleFullfieldCarById = (state, { payload }) => {
  return {
    ...state,
    car: payload,
    isLoading: false,
  };
};
