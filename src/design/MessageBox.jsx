import './messageBox.scss';
export default function MessageBox(props) {
    return(
        <div className="messageBox">
            <main className="content">
                {props.children}
            </main>
            <div className="triangle"><div></div></div>
        </div>
    );
}