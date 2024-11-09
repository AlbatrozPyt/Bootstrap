export const ContainerMain = props => {
  return <main className={`container ${props.className}`}>{props.children}</main>;
};

export const ContainerForm = props => {
  return <div className={`w-75 mt-5 p-5 border rounded ${props.className}`}>{props.children}</div>;
}