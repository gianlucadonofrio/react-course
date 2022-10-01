import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: 'dn4pxdjdt',
  api_key: '413238835992691',
  api_secret: 'plyrfhqtytuQhHfD2JbKaOt720I',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de cargar el archivo a cloudinary', async () => {
    const imgUrl =
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80 ';
    const resp = await fetch(imgUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    await cloudinary.api.delete_resources(['journal-app/' + imageId]);
  });
  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
