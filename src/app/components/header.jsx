import React, { use } from 'react';
import { fakeUsernameAvatar } from '../mockData/getUsernameAvater';
import ThemeSwitcher from './themeSwitcher';
import { useState, useEffect } from 'react';

export default function Header() {
    const [username, setUsername] = useState(''); 
    const [avatarUrl, setAvatarUrl] = useState('');
    useEffect(() => {
        setTimeout(() => {
        setUsername(fakeUsernameAvatar.name);
        setAvatarUrl(fakeUsernameAvatar.avatarUrl);
        }, 400);
  }, []);

  return (
    <header className="bg-[var(--header-bg)] text-[var(--secondary-text)] p-4 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto flex justify-end items-center">
        <ThemeSwitcher/>
{        avatarUrl.length > 0 && (    
    <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt={`${username}'s avatar`}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">{username}</span>
      </div>)}
      </div>
    </header>
  );
}