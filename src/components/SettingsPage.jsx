import { useState } from "react";
import {
  FiMoon,
  FiSun,
  FiGlobe,
  FiCloud,
  FiLock,
  FiShield,
  FiHelpCircle,
  FiBell,
  FiVolume2
} from "react-icons/fi";

const SettingsPage = ({ darkMode, setDarkMode }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    sound: false,
    language: "en",
    fontSize: "medium",
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const SettingSection = ({ title, icon, children }) => (
    <div
      className={`rounded-lg overflow-hidden mb-6 ${
        darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
      }`}
    >
      <div
        className={`p-4 border-b flex items-center ${
          darkMode
            ? "border-gray-700 bg-gray-700"
            : "border-gray-200 bg-gray-50"
        }`}
      >
        {icon}
        <h3 className="font-medium ml-2">{title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );

  const SettingToggle = ({ label, description, value, onChange }) => (
    <div className="flex items-center justify-between mb-4">
      <div>
        <div className="font-medium">{label}</div>
        <div
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </div>
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          value ? "bg-blue-600" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  return (
    <div
      className={`flex-1 flex flex-col h-screen overflow-y-auto ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Settings header */}
      <div
        className={`p-4 border-b sticky top-0 z-10 ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
        }`}
      >
        <h2 className="text-xl font-semibold">Settings</h2>
      </div>

      {/* Settings container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Preferences
          </h2>

          <SettingSection
            title="Appearance"
            icon={darkMode ? <FiMoon /> : <FiSun />}
          >
            <SettingToggle
              label="Dark Mode"
              description="Switch between light and dark theme"
              value={darkMode}
              onChange={setDarkMode}
            />

            <div className="mb-4">
              <div className="font-medium mb-2">Font Size</div>
              <div className="flex space-x-2">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSettingChange("fontSize", size)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      settings.fontSize === size
                        ? darkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                        : darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </SettingSection>

          <SettingSection title="Language" icon={<FiGlobe />}>
            <div className="mb-4">
              <label
                htmlFor="language"
                className={`block font-medium mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Interface Language
              </label>
              <select
                id="language"
                value={settings.language}
                onChange={(e) =>
                  handleSettingChange("language", e.target.value)
                }
                className={`block w-full p-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </SettingSection>

          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            File Storage & Sync
          </h2>

          <SettingSection title="Sync Files" icon={<FiCloud />}>
            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
              Manage cloud storage and synchronization
            </div>
            <button
              className={`px-4 py-2 rounded-md ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Configure Sync Settings
            </button>
          </SettingSection>

          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Privacy & Security
          </h2>

          <SettingSection title="Privacy" icon={<FiLock />}>
            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
              Manage your privacy settings
            </div>
            <button
              className={`px-4 py-2 rounded-md ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Privacy Settings
            </button>
          </SettingSection>

          <SettingSection title="Security" icon={<FiShield />}>
            <SettingToggle
              label="Two-Factor Authentication"
              description="Add an extra layer of security to your account"
              value={false}
              onChange={() => {}}
            />
          </SettingSection>

          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Help & Support
          </h2>

          <SettingSection title="Support" icon={<FiHelpCircle />}>
            <div className="space-y-4">
              <button
                className={`w-full text-left p-3 rounded-md ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Help Center
              </button>
              <button
                className={`w-full text-left p-3 rounded-md ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Contact Support
              </button>
              <button
                className={`w-full text-left p-3 rounded-md ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                About this App
              </button>
            </div>
          </SettingSection>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;