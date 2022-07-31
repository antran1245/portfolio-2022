import './messageBox.scss';
export default function MessageBox(props) {
    return(
        <div className={""+props.box}>
            <main className="content">
                {props.children}
            </main>
            <div className="triangle"><div></div></div>
        </div>
    );
}