export const pendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

export const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfielldCars = (state, { payload }) => {
  state.items = [...state.items, ...payload];
  state.isLoading = false;
  state.totalCount = payload.length;
};

export const handleFulfielldCarById = (state, { payload }) => {
  state.item = payload;
  state.isLoading = false;
};
