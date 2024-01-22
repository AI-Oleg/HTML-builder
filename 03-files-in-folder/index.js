const fs = require('fs').promises;
const path = require('path');

async function displayFilesInfo() {
  const folderPath = path.join(__dirname, 'secret-folder');
  const files = await fs.readdir(folderPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile()) {
      const filePath = path.join(folderPath, file.name);
      const stats = await fs.stat(filePath);
      const fileExtension = path.extname(file.name).slice(1);
      const fileSize = (stats.size / 1024).toFixed(3);

      console.log(`${file.name}-${fileExtension}-${fileSize}kb`);
    }
  }
}

displayFilesInfo().catch(console.error);
