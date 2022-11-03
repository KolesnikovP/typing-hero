import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GamePage } from 'pages/GamePage'
import { AboutPage } from 'pages/AboutPage'

export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Routes>
        {/* '/' - временная мера для удобства разработки - после перейдем на main */}
        <Route path={'/'} element={<GamePage />} />
        <Route path={'/main'} element={<GamePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/results'} element={<>results in process</>} />
        <Route path={'/profile'} element={<>profile in process</>} />
      </Routes>
    </Suspense>
  )
}
