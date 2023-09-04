import { Icon } from "@iconify/react";

const PasswordEye = (showPassword, key) => {
  return (
    <div key={key}>
      {showPassword.showPassword ? (
        <Icon
        icon="ph:eye-slash-light"
        color="#c5c5c5"
          width="24"
          height="24"
          />
      ) : (
        <Icon icon="ph:eye-light" color="#c5c5c5" width="24" height="24" />
        )}
    </div>
  );
};

export default PasswordEye;
