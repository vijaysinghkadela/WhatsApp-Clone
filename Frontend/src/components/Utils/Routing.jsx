import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import UpdatesUi from '../Home/UpdatesUi';
import CommunitiesUi from '../Home/CommunitiesUi';
import CallsUi from '../Home/CallsUi';
import ChatsUi from '../Home/ChatsUi';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatsUi />} />
        <Route path="/updates" element={<UpdatesUi />} />
        <Route path="/communities" element={<CommunitiesUi />} />
        <Route path="/calls" element={<CallsUi />} />
      </Routes>
    </div>
  )
}

export default Routing;