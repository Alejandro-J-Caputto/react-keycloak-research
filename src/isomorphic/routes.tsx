import React from 'react'
import { Route, Routes as RoutesContainer } from 'react-router-dom'

import Home from './components/Home'

export default function Routes() {
  return (
    <RoutesContainer>
      <Route path="/" element={<Home />} />
      <Route path="/hi" element={<div>Hello </div>} />
    </RoutesContainer>
  )
}
