import { useNavigate } from 'react-router-dom';
import { companyName } from '../screens/Main';

export const LogoSectionFooter = (props) => {

    return (
        <div className="flex h-[50px] flex-row items-center gap-2">
            <div className="text-[5rem] text-white-600 font-bold">
                V
            </div>
                <div className="border-l border-white h-14 mt-2"></div>

            <div className="mt-1 text-wrap w-[160px] text-center">
                {companyName+" Pvt Ltd."} 
            </div>
        </div>
    );
}

export const LogoSectionHeader = ({setActive}) => {
    const navigate=useNavigate()

    return (
        <div  className = "flex items-center justify-center gap-1 font-sans" >
    <img onClick={()=>navigate('/')}
      src={require('../../assets/VRGT_Logo.png')}
      alt="Logo"
      className="w-[44px] cursor-pointer h-14 rounded-full"
    />
    <div className="border-l border-white h-11 mt-1"></div>
    <div className="text-center text-[20px] mt-1 ml-1 text-wrap w-[130px] capitalize font-bold">
      {companyName}
  </div>
</div>
    );
}
