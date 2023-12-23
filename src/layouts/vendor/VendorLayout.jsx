import React from 'react';
// react router
import { Outlet } from 'react-router';

const VendorLayout = () => {
    return (
        <div>
            VendorLayout
            <Outlet />
        </div>
    );
};

export default VendorLayout;
