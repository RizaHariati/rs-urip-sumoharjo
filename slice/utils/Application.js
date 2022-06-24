const handleRequest = (state, action) => {
  const { appointmentData, selfAppointment } = action.payload;
  if (selfAppointment) {
    state.appointmentTemp = {
      ...appointmentData,
      requesterName: "",
      requesterRelationship: "",
      requesterPhone: "",
    };
    state.selfAppointment = selfAppointment;
  } else {
    state.appointmentTemp = appointmentData;
    state.selfAppointment = selfAppointment;
  }
};

const handleConfirm = (state, action) => {
  const { appointmentData, selfAppointment } = action.payload;
  if (selfAppointment) {
    state.appointmentData = {
      ...appointmentData,
      requesterName: "",
      requesterRelationship: "",
      requesterPhone: "",
    };
  } else {
    state.appointmentData = appointmentData;
  }
};

const handleReference = (state, action) => {
  const { purpose, location } = action.payload;
  state.selfAppointment = true;
  state.appointmentTemp = {
    ...state.appointmentTemp,
    appointmentPurpose: purpose,
    appointmentLocation: location,
  };
};

const handleReset = (state) => {
  const { status } = state.login;
  let temp = {
    requesterName: "",
    requesterRelationship: "",
    requesterPhone: "",
    name: "",
    email: "",
    gender: "",
    age: "",
    address: "",
    phone: "",
    appointmentPurpose: "Umum",
    appointmentLocation: "specialization",
  };
  if (!status) {
    state.appointmentTemp = temp;
  } else {
    const { name, email, gender, age, address, phone } =
      state.login.datapatient;
    state.appointmentTemp = {
      ...temp,
      name,
      email,
      gender,
      age,
      address,
      phone,
    };
  }
  state.selfAppointment = true;
};
export { handleRequest, handleConfirm, handleReset, handleReference };
