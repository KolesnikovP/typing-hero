import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Routes>
        {/* '/' - временная мера для удобства разработки - после перейдем на main */}
        {Object.values(routeConfig).map(({element, path})=> (
          <Route path={path} element={element}/>
        ))}
      </Routes>
    </Suspense>
  )
}
