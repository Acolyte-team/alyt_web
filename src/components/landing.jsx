"use client"

import React from 'react'
import { useState } from 'react';
// import { ethers } from 'ethers';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  let web3 = new Web3(window.ethereum);

  return (
      <div
        className='h-screen w-6/12 p-6 border-2 rounded-xl flex justify-center items-center'
    >
        <div
            className='flex flex-col items-center'
        >
            <p
                className='font-bold text-6xl text-white mb-4 text-center'
            >
                Social Interaction Made Fun
            </p>

          
        </div>
    </div>
  )
}

export default Landing
