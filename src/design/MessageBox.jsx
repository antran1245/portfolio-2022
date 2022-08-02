import './messageBox.scss';
export default function MessageBox(props) {
    const { box, size = "w-100" } = props
    return(
        <div className={size+" "+box}>
            <main className="content">
                {props.children}
            </main>
            <div className="triangle"><div></div></div>
        </div>
    );
}