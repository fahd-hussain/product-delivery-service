import { Dispatch, FC, SetStateAction } from "react";

interface HeaderProps {
  toggleHide: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ toggleHide }) => {
  const handleToggleHide = () => {
    toggleHide((prevState) => !prevState);
  };

  return (
    <header className="_layout_header">
      <button title="Hide me" onClick={handleToggleHide} />
      Header
    </header>
  );
};

export default Header;
