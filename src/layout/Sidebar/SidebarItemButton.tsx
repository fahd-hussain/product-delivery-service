import { ComponentType, FC, LazyExoticComponent } from "react";
import { ListItemDecorator } from "@mui/joy";
import { ListItemButton, Typography } from "@mui/material";

const SidebarItemButton: FC<SidebarItemProps> = ({
  title,
  Icon,
  className,
  onClick,
}) => {
  return (
    <ListItemButton className={className} onClick={onClick}>
      <ListItemDecorator>
        <Icon />
        <Typography>{title}</Typography>
      </ListItemDecorator>
    </ListItemButton>
  );
};

interface SidebarItemProps {
  title: string;
  Icon: LazyExoticComponent<ComponentType<any>>;
  className: string;
  onClick?: () => void;
}

export default SidebarItemButton;
