export function ImportUser({ onUserChange, onAgeChange }) {
    return (
        <div>
            <input placeholder="Enter Age" type = "number" onChange={(e) => onAgeChange(e.target.value)}/>
            <input placeholder="Enter Name" onChange={(e) => onUserChange(e.target.value)}/>
        </div>
    );
}