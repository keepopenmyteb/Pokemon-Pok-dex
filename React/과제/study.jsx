function Alert({ type, message }) {
const alertStyle = { 
    padding: '15px', 
    borderRadius: '5px',
    backgroundColor: type === 'success' ? '#d4edda' :
                     type === 'error' ? '#f8d7da' :
                     '#fff3cd',
    color:  type === 'success' ? '#155724' :
            type === 'error' ? '#721c24' :
            '#856404'
    };
    return <div style={alertStyle}>{message}</div>;
}