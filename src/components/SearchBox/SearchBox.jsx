import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    const input = event.currentTarget.value;
    dispatch(changeFilter(input));
  };

  return (
    <div className={s.serchboxDiv}>
      <h2 className={s.serchboxTitle}>Find contacts by name</h2>
      <input
        className={s.serchboxInput}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
