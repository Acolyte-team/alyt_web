import React, {useState} from 'react'
import Image from 'next/image'
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  let web3 = new Web3(window.ethereum);
   async function requestAccount(){
       console.log("Requesting account...");
    if(window.ethereum){
      try{
        console.log("metamask detected");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // console.log("metamsk accounts",accounts);
         setWalletAddress(accounts[0]);

        // Save the wallet address in local storage
        localStorage.setItem('walletAddress', accounts[0]);

        // Redirect to profile page if wallet is connected
        if (accounts.length > 0) {
          navigate("/profile");
        } else {
          console.log("No accounts found.");
        }

      }catch(err){
         if (err.code === 4001) {
           // EIP-1193 userRejectedRequest error.
            console.log("Please connect to MetaMask.");
          } else {
                console.error(err);
            }
      }
      
    }else{
      console.log("metamask not detected");
      alert("Please install metamask and connect to a network");
    }
  }
  return (
     <div
        className='flex flex-row justify-between items-center p-4 mb-8 border-b border-slate-500'
    >
        <p
            className='font-bold text-[#D6594B] text-3xl'
        >
            Acolyte
        </p>

        <button onClick={requestAccount}
            className='flex flex-row justify-between items-center h-[52px] bg-slate-500/50 py-2 px-4 rounded-xl text-white font-medium text-lg'
        >
           <Image 
            src="/assets/Images/metamask.png" 
            className="mr-2"
            width="24" 
            height="24"
            alt=''
           /> 
           Connect Metamask
        </button> 
    </div>
  )
}

export default Header
