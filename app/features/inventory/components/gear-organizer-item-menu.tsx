import type { CategoryType } from "db";
import type { FC } from "react";
import type { DragAndDropItem } from "app/modules/drag-and-drop/contexts/gear-dnd-context";

import { useContext } from "react";

import { MenuItem, MenuList } from "@chakra-ui/menu";
import { FaEdit, FaList, FaStar, FaTrash } from "react-icons/fa";

import gearOrganizerContext from "../contexts/gear-organizer-context";

type GearOrganizerItemMenuProps = {
  item: DragAndDropItem;
  type: CategoryType;
};

const GearOrganizerItemMenu: FC<GearOrganizerItemMenuProps> = ({
  item,
  type,
}) => {
  const { editItem, deleteItem, toggleMetaItem } =
    useContext(gearOrganizerContext);

  return (
    <MenuList>
      <MenuItem icon={<FaEdit />} onClick={() => editItem(item.id)}>
        Edit item
      </MenuItem>
      <MenuItem icon={<FaTrash />} onClick={() => deleteItem(item.id)}>
        Delete item
      </MenuItem>

      {type === "WISH_LIST" && (
        <MenuItem icon={<FaList />} onClick={() => toggleMetaItem(item.id)}>
          Move to inventory
        </MenuItem>
      )}

      {type === "INVENTORY" && (
        <MenuItem icon={<FaStar />} onClick={() => toggleMetaItem(item.id)}>
          Move to wish list
        </MenuItem>
      )}
    </MenuList>
  );
};

export default GearOrganizerItemMenu;
