import React from "react";
import store, { addCity } from "../store";
import { useProxy } from "valtio";

export default () => {
  const snapshot = useProxy(store);
  return (
    <form
      className="search"
      onSubmit={e => {
        e.preventDefault();
        addCity();
      }}
    >
      <div>
        <input
          placeholder="City"
          value={snapshot.city}
          onChange={evt => (store.city = evt.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add City</button>
      </div>
    </form>
  );
};
