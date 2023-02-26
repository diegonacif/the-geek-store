import { useForm } from 'react-hook-form';
import '../../css/App.css';

export const ProductRegister = () => {
  // Hook Form Controller
  const {
    watch,
    register,
    setValue,
    getValues
  } = useForm({
    mode: "all"
  });

  return (
    <div className="product-register">
      <h2>Registro de produtos</h2>
      <input type="text" placeholder="título" {...register("title")}/>
      <div className="register-row">
        <input type="number" placeholder="preço" {...register("originalPrice")}/>
        <input type="number" placeholder="preço com desconto" {...register("currentPrice")}/>
      </div>
      <input type="number" placeholder="quantidade em estoque" {...register("inStock")}/>
      {/* <input type="text" placeholder="descrição" {...register("description")}/> */}
      <textarea 
        placeholder="descrição" 
        {...register("description")}
      />
      <input type="file" placeholder="foto" />
      <button>Registrar</button>
    </div>
  )
}