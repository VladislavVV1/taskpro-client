import React, { use } from 'react';
import ThemeSwitcher from './themeSwitcher';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { GoPersonFill } from "react-icons/go";
import { useModal } from './modals/ModalContext';
import { UpdateProfile } from '../lib/apiUpdateProfile';
import { UpdateProfileWithAvatar } from '../lib/apiUpdateProfile';
import Image from "next/image";
import { BsList } from "react-icons/bs";

export default function Header({ setSidebarToggle, isSidebarOpen }) {
  const {openModal} = useModal();

  const token = Cookies.get('auth_token');
    const [username, setUsername] = useState(''); 
    const [avatarUrl, setAvatarUrl] = useState('');
    const [email, setEmail] = useState('');
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await fetch('https://taskpro-backend-74ub.onrender.com/auth/users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    (async () => {
      const data = await getUserData(); 
      setUsername(data ? data.username : 'Guest');
      setAvatarUrl(data ? data.avatar : 'Default');
      setEmail(data ? data.email : 'guest@example.com');
    })();
  }, []);


 const handleEditProfile = () => {
    openModal('EditProfile', {
      // Pre-fill the form with the user's current data
      initialValues: {
        avatar: avatarUrl, // The current avatar URL
        name: username,
        email: email,
        password: '', // Always start with an empty password field
      },
      onSubmit: async (values) => {
        console.log('Updating profile with:', values);

        // For file uploads, you must use FormData
        const formData = new FormData();
        if (values.avatar instanceof File) {
          formData.append('file', values.avatar);
        }
        const updatedData = {
          username: values.name,
          email: values.email,
          ...(values.password && { password: values.password }),
        };
        
        //  
        await UpdateProfile(updatedData).then((profileResponse) => {
          console.log('Profile update response:', profileResponse);
          if (profileResponse) {
            setUsername(profileResponse.username);
            setEmail(profileResponse.email);
          }
        });
        await UpdateProfileWithAvatar(formData).then((avatarResponse) => {
          console.log('Avatar update response:', avatarResponse);
          if (avatarResponse && avatarResponse.avatar) {
            setAvatarUrl(avatarResponse.avatar);
          }
        });
      },
    });
  };
console.log('Header render - isSidebarOpen:', isSidebarOpen);
  return (
    <header className="bg-[var(--header-bg)] text-[var(--secondary-text)] p-4 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={setSidebarToggle} 
            className={`p-2 ${isSidebarOpen ? "hidden" : "block"} md:hidden`}
          >
            <BsList className="w-6 h-6" />
          </button>
        </div>
      <div className="container mx-auto flex justify-end items-center">
        <ThemeSwitcher/>
        <div className="ml-4 flex items-center gap-[8px] cursor-pointer"
        onClick={handleEditProfile}
        tabIndex={0}
        role="button"
        aria-label='User Profile'>
          <span className="text-[14px] font-medium text-[var(--profile-title)]">{username}</span>
{avatarUrl === 'Default' || avatarUrl === null ? (
<div className="w-[32px] h-[32px] bg-[var(--profile-logo)] rounded-[4px] flex items-end justify-center overflow-hidden">
  <GoPersonFill className="w-[30px] h-[60px]" style={{ marginBottom: '-18px'}} />
</div>
) : (
  avatarUrl.length > 0 && (
    <>
      <Image
        src={`https://taskpro-backend-74ub.onrender.com${avatarUrl}`}
        alt={`${username}'s avatar`}
        width={100}
        height={100}
        className="w-8 h-8 rounded-full"
      />
    </>
  )
)}
    </div>
    </div>
    </div>
    </header>
  );
}