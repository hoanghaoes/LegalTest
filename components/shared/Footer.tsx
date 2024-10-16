import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    padding: 10,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 400, fontSize: 14 }}>
                    ©Legal Search Project
                </h1>
                <a
                    target="_blank"
                    style={{
                        width: 18,
                        marginLeft: 10,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    href="https://github.com/legal-search-app/LegalSearch"
                >
                    <FontAwesomeIcon icon={faGithub} color="black" />
                </a>
            </div>
        </div>
    );
}
