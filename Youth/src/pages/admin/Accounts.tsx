import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

type Role = "admin" | "student" | "lecturer" | "instructor";

type Account = {
  id: number;
  name: string;
  email: string;
  role: Role;
};

export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const fetchAccounts = async () => {
    setLoading(true);

    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: "20",
      search,
      role: roleFilter,
    });

    const res = await fetch(`/api/accounts?${params.toString()}`);
    const data = await res.json();

    setAccounts(data.items);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchAccounts();
  }, [page, search, roleFilter]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manage Accounts</h1>

      <div className="flex items-center gap-3 mb-4">
        <input
          placeholder="Search name or email..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="border p-2 rounded w-64"
        />

        <select
          value={roleFilter}
          onChange={(e) => {
            setPage(1);
            setRoleFilter(e.target.value);
          }}
          className="border p-2 rounded"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
          <option value="lecturer">Lecturer</option>
          <option value="instructor">Instructor</option>
        </select>

        <button className="flex items-center px-4 py-2 bg-primary text-secondary rounded-lg">
          <Plus size={18} className="mr-2" /> Add Account
        </button>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 w-24 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : accounts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  No accounts found.
                </td>
              </tr>
            ) : (
              accounts.map((acc) => (
                <tr key={acc.id} className="border-b">
                  <td className="p-3">{acc.name}</td>
                  <td className="p-3">{acc.email}</td>
                  <td className="p-3 capitalize">{acc.role}</td>

                  <td className="p-3 flex justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
