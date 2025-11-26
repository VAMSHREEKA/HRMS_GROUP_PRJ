import React from 'react';

const SystemSettings = ({ settings }) => {
  const handleSettingClick = (settingName) => {
    if (settingName === 'Exit') {
      if (confirm('Are you sure you want to exit?')) {
        console.log('Exiting application...');
      }
    } else if (settingName === 'Clear History') {
      if (confirm('Are you sure you want to clear all history?')) {
        console.log('Clearing history...');
      }
    } else {
      console.log(`Opening ${settingName}...`);
    }
  };

  return (
    <div>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">System Settings</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {settings.map((setting) => (
          <div
            key={setting.id}
            onClick={() => handleSettingClick(setting.name)}
            className={`profile-action-item group ${
              setting.name === 'Exit' || setting.name === 'Clear History' 
                ? 'text-red-600 hover:text-red-700 hover:bg-red-50' 
                : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{setting.icon}</span>
              <span className={
                setting.name === 'Exit' || setting.name === 'Clear History' 
                  ? 'text-red-600 group-hover:text-red-700' 
                  : 'text-gray-700 group-hover:text-gray-900'
              }>
                {setting.name}
              </span>
            </div>
            <span className={
              setting.name === 'Exit' || setting.name === 'Clear History' 
                ? 'text-red-400 group-hover:text-red-600' 
                : 'text-gray-400 group-hover:text-gray-600'
            }>
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemSettings;