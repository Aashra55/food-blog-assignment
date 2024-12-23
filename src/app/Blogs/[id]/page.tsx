import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfAlt, faClock, faUtensils, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { blogs, FAQ } from '../cards';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  return blogs.map((e) => ({
    item: e.id,
  }));
}

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const blogId = Number(params.id);
  const blog: any = blogs.find((e) => e.id === blogId);

  if (!blog) {
    notFound();
  }

  const fullStars = Math.floor(blog.rating); // Full stars (integer part)
  const hasHalfStar = blog.rating % 1 !== 0; // Check if there's a half star
  const totalStars = 5;

  return (
    <div>
        <div className='w-full lg:text-5xl text-2xl text-pink-600 font-bold text-center leading-[50px] lg:leading-[100px]'>{blog.title}</div>
        <div className='flex lg:flex-row md:flex-row flex-col lg:gap-[30px] md:gap-[30px] gap-[20px] p-[2%] w-full'>
        <Image src={blog.image} alt={blog.title} className='lg:w-[50%] w-full lg:h-[530px] h-[250px]'/>
        <div className='lg:pt-[1%] md:pt-[1%]'>
        <div className="flex items-center w-full gap-[2px]">
            <p className='mr-[20px] text-gray-400'>Rates:</p>
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 w-[16px]" />
      ))}

      {/* Render half star if needed */}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400 w-[16px]" />}

      {/* Render empty stars */}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <FontAwesomeIcon key={index + fullStars + (hasHalfStar ? 1 : 0)} icon={faStar} className="text-gray-300 w-[16px]" />
      ))}
    </div>     
    <div className='flex flex-col gap-[20px]'>
            <div>
                <p className='lg:text-3xl md:text-3xl text-[18px] text-gray-400 font-bold lg:leading-[60px] leading-[30px]'>Description</p>
                <p>{blog.description}</p>
            </div>
            <div>
                <p className='lg:text-3xl md:text-3xl text-[18px] text-gray-400 font-bold lg:leading-[60px] leading-[30px]'>BackStory</p>
                <p>{blog.backstory}</p>
            </div>
    
    </div>     
    <div className='w-full justify-between flex items-center  mt-[25px]'>
        <div className='text-gray-400 font-bold lg:text-2xl md:text-xl'>Preparation Time</div>
        <div className='flex flex-row gap-[8px] items-center lg:w-[15%] w-[30%] text-gray-400'>
            <FontAwesomeIcon icon={faClock} className='lg:w-[20px] w-[20px] w-[14px] text-yellow-400'/>
            <p className='lg:text-[16px] md:text-[16px] text-[12px]'>{blog.preparationTime}</p>
        </div>
    </div>

    <div className='w-full'>
        <div className='text-gray-400 font-bold lg:text-2xl text-[20px] mt-[25px]'>Nutritions</div>
        <div className=' mt-[15px] flex lg:gap-[50px] gap-[25px] text-gray-400'>
            <div className='flex flex-col gap-[7px] items-center'>
                <p className='text-yellow-400 font-bold'>Calories</p>
                <p className='text-[14px]'>{blog.nutrition.calories}</p>
            </div>
            <div className='flex flex-col gap-[7px] items-center'>
                <p className='text-yellow-400 font-bold'>Proteins</p>
                <p className='text-[14px]'>{blog.nutrition.protein}</p>
            </div>
            <div className='flex flex-col gap-[7px] items-center'>
                <p className='text-yellow-400 font-bold'>Carbs</p>
                <p className='text-[14px]'>{blog.nutrition.carbs}</p>
            </div>
            <div className='flex flex-col gap-[7px] items-center'>
                <p className='text-yellow-400 font-bold'>Fats</p>
                <p className='text-[14px]'>{blog.nutrition.fats}</p>
            </div>
        </div>
    </div>
  
    </div>
    </div>
        <div className='p-[2%] lg:pl-[4%] md:pl-[4%] lg:pr-[4%] md:pr-[4%] flex flex-col gap-[20px]'>
            <p className=' lg:text-5xl md:text-5xl text-3xl font-bold text-pink-600 mainName mt-[10px]'>Recipe</p>
            <div className='flex lg:flex-row md:flex-row flex-col w-full gap-[20px] lg:gap-[90px] md:gap-[70px]'>
            <div className='bg-gray-100 p-[2%] pl-[4%] rounded-sm lg:rounded-xl md:rounded-xl lg:w-[50%] md:w-[50%] shadow-lg'>
            <p className=' lg:text-3xl md:text-3xl text-xl font-bold text-gray-400  mt-[10px]'>Ingredients</p>
            <ul className='pl-[2%] mt-[10px] lg:mt-[20px]'>
            {blog.recipe.ingredients.map((e:string[])=>(
              <li className='list-disc '>{e}</li>
            ))}
            </ul>
            </div>
            <div className='bg-gray-100 p-[2%] pl-[4%] rounded-sm lg:rounded-xl md:rounded-xl lg:w-[50%] md:w-[50%] shadow-lg'>
            <p className=' lg:text-3xl md:text-3xl text-xl font-bold text-gray-400  mt-[10px]'>Steps</p>
            <ul  className='pl-[2%] mt-[10px] lg:mt-[20px]'>
              {blog.recipe.ingredients.map((e:string[])=>(
                <li className='list-disc '>{e}</li>
              ))}
            </ul>
            </div>
            </div>
        </div>
        <div className='flex gap-[15px] p-[2%] items-center lg:pl-[4%] md:pl-[4%] lg:pr-[4%] md:pr-[4%]'>
          <FontAwesomeIcon icon={faUtensils} className='w-[50px] text-yellow-400'/>
          <p className='lg:text-5xl md:text-5xl text-3xl text-pink-600 mainName font-bold'>Serving Suggestions</p>
        </div>
        <div className='bg-gray-100 p-[2%] pl-[4%] rounded-sm lg:rounded-xl md:rounded-xl shadow-lg lg:ml-[4%] md:ml-[4%] lg:mr-[4%] md:mr-[4%]'>
          <ul>
          {blog.servingSuggestions.map((e:string[])=>(
            <li className='list-disc'>{e}</li>
          ))}
          </ul>
        </div>
        <div className=' p-[2%] items-center lg:pl-[4%] md:pl-[4%] lg:pr-[4%] md:pr-[4%]'>
        <p className='lg:text-5xl md:text-5xl text-3xl text-pink-600 mainName font-bold'>Tips</p>
        </div>
        <div className='bg-gray-100 p-[2%] pl-[4%] rounded-sm lg:rounded-xl md:rounded-xl shadow-lg lg:ml-[4%] md:ml-[4%] lg:mr-[4%] md:mr-[4%]'>
          <ul>
          {blog.tips.map((e:string[])=>(
            <li className='list-disc'>{e}</li>
          ))}
          </ul>
        </div>
    </div>
  );
};

export default BlogDetail;
