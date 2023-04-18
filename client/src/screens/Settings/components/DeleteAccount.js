import React from 'react'

const DeleteAccount = () => {
  return (
    <div className='flex flex-col gap-3 text-gray-400'>
      <div className='font-medium text-gray-500'>Delete Account</div>
      <div>
        When you delete your account, your public profile will be deactivated
        immediately. If you change your mind before the 14 days are up, sign in
        with your email and password and we'll send you a link to reactivate
        your account.
      </div>
      <div className="flex items-center gap-1">
        <input type="checkbox" />
        <div>Yes, I want to delete my account</div>
      </div>
      <button className='w-fit bg-red-500 text-white py-1.5 px-5 rounded-md'>Delete</button>
    </div>
  );
}

export default DeleteAccount