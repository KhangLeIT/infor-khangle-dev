// src/components/Sidebar.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface LinkItem {
  name: string;
  path: string;
  icon: IconDefinition;
}

interface SidebarProps {
  links: LinkItem[];
  close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ links, close }) => {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links.map(link => (
        <Link
          to={link.path}
          className={location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'}
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>

      ))}
      <center style={{marginTop: '20px', color: 'red'}}>Click here to exit</center>
    </div>
  );
};

export default Sidebar;
