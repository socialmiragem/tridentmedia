'use client'
import React from 'react'
import { useLoader } from "@/app/context/LoaderContext";

const page = () => {
    const { startLoading, stopLoading } = useLoader();
                          startLoading();

    return (
    <>
    </>
  )
}

export default page