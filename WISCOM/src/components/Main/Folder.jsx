import * as F from './FolderStyle';
import FolderImg from './../../img/Main/Folder.svg';
import { motion } from 'framer-motion';

export default function Folder() {
  return (
    <>
      <F.FolderWrapper>
        <F.FolderGroup href="/project">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>PROJECT</F.FolderName>
        </F.FolderGroup>

        <F.FolderGroup href="https://dswuwis.store/chatbot" target="_blank">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>CHATBOT</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="/guestbook">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>GUESTBOOK</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="/qrcode">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>QR-CODE</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="/developer">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>DEVELOPER</F.FolderName>
        </F.FolderGroup>
      </F.FolderWrapper>
      <F.ClickInfo>Click The Folder</F.ClickInfo>
    </>
  );
}
