import folders from '../adapters/folders';

const page = ({ pageContext }) => folders(pageContext);

export default page;
