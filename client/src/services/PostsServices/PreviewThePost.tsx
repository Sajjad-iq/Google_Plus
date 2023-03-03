import { useNavigate } from 'react-router-dom'


export const PreviewThePost = () => {

  const Navigate = useNavigate()

  const onClickOnPost = (e: any) => {
    localStorage.setItem('SinglePost', JSON.stringify(e))
    Navigate("/Posts")
  }
  return { onClickOnPost }
}
