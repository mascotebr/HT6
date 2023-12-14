export function CTA({ open }: any) {
  return (
    <div className="p-2" style={{backgroundColor: 'var(--primary-dark)', height: 121}}>
    <center>
        <p className="text-white p-0 m-2">Venha fazer parte</p>
        <div className="button-ht6" onClick={() => open(true)}>Garanta sua vaga agora!</div>
      </center>
    </div>
  );
}
