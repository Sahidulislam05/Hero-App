import { Search } from "lucide-react";
import useApps from "../../Hooks/useApps";
import AllApps from "./AllApps";
import { useState } from "react";

const Apps = () => {
  const { apps } = useApps();
  // console.log(apps);
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  // console.log(searchedApps);
  return (
    <div className="mt-10 container mx-auto mb-20">
      <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
      <p className="text-xl text-center mt-4 text-[#627382] ">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center my-10">
        <h1 className="text-xl md:text-2xl font-bold">
          <span>({searchedApps.length})</span> Apps Found
        </h1>
        <label className="input w-1/2 md:w-full max-w-xs ">
          <Search />{" "}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {searchedApps.map((app) => (
          <AllApps key={app.id} app={app}></AllApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
