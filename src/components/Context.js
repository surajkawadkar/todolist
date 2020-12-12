import React from "react";

const UsesrContext = React.createContext()

const UserProvider = UsesrContext.Provider
const UserConsumer = UsesrContext.consumer

export {UserProvider, UserConsumer}