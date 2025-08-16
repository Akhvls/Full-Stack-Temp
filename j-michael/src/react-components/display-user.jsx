export function DisplayUser({ name, id }) {
  return (
    <div>
      <h1>{name ?? "No name provided"}</h1>
        <p> {id ?? "No id provided"}</p>
    </div>
  );
}
