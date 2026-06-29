/* === External Script: https://cdn.tailwindcss.com?plugins=forms,container-queries === */

/* === Inline Script [tailwind-config] === */

      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "outline": "#737685",
                    "secondary-container": "#6ae1ff",
                    "secondary-fixed-dim": "#5dd6f3",
                    "on-primary-fixed-variant": "#0040a2",
                    "on-error": "#ffffff",
                    "on-secondary-fixed-variant": "#004e5d",
                    "on-tertiary-fixed": "#380d00",
                    "tertiary-fixed": "#ffdbcf",
                    "on-primary": "#ffffff",
                    "surface-dim": "#d7dadc",
                    "on-secondary": "#ffffff",
                    "surface-container-high": "#e5e9eb",
                    "primary": "#003d9b",
                    "surface-container-highest": "#e0e3e5",
                    "inverse-surface": "#2d3133",
                    "primary-container": "#0052cc",
                    "on-error-container": "#93000a",
                    "on-secondary-container": "#006374",
                    "primary-fixed-dim": "#b2c5ff",
                    "tertiary": "#7b2600",
                    "inverse-primary": "#b2c5ff",
                    "surface-tint": "#0c56d0",
                    "on-background": "#181c1e",
                    "surface-container-low": "#f1f4f6",
                    "on-surface-variant": "#434654",
                    "on-tertiary-container": "#ffc6b2",
                    "tertiary-fixed-dim": "#ffb59b",
                    "secondary": "#00687a",
                    "secondary-fixed": "#adecff",
                    "error": "#ba1a1a",
                    "on-primary-container": "#c4d2ff",
                    "error-container": "#ffdad6",
                    "primary-fixed": "#dae2ff",
                    "on-secondary-fixed": "#001f26",
                    "surface-container": "#ebeef0",
                    "tertiary-container": "#a33500",
                    "on-tertiary-fixed-variant": "#812800",
                    "on-surface": "#181c1e",
                    "on-primary-fixed": "#001848",
                    "surface": "#f7fafc",
                    "surface-bright": "#f7fafc",
                    "surface-container-lowest": "#ffffff",
                    "inverse-on-surface": "#eef1f3",
                    "outline-variant": "#c3c6d6",
                    "on-tertiary": "#ffffff",
                    "surface-variant": "#e0e3e5",
                    "background": "#f7fafc"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xl": "40px",
                    "lg": "24px",
                    "md": "16px",
                    "xs": "4px",
                    "container-margin": "20px",
                    "sm": "8px",
                    "gutter": "16px",
                    "base": "4px"
            },
            "fontFamily": {
                    "body-md": ["Inter"],
                    "headline-lg": ["Inter"],
                    "label-md": ["Inter"],
                    "headline-xl": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "label-sm": ["Inter"],
                    "headline-md": ["Inter"],
                    "body-lg": ["Inter"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-lg-mobile": ["26px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
            }
          }
        }
      }
    

/* === External Script: https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js === */

/* === Inline Script [block-4] === */

(function() {
  const container = document.getElementById('threejs-container-ANIMATION_2');
  const devicePixelRatio = window.devicePixelRatio || 1;
  const scene = new THREE.Scene();
const containerWidth = container.clientWidth || window.innerWidth;
const containerHeight = container.clientHeight || window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(containerWidth, containerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Heart Shape Group
const heartGroup = new THREE.Group();
scene.add(heartGroup);

// Create a stylized heart using spheres and cylinders
const material = new THREE.MeshPhongMaterial({
    color: 0xff4d4d,
    shininess: 100,
    specular: 0x444444
});

const leftLobe = new THREE.SphereGeometry(0.8, 32, 32);
const rightLobe = new THREE.SphereGeometry(0.8, 32, 32);
const bottom = new THREE.ConeGeometry(0.8, 1.8, 32);

const leftMesh = new THREE.Mesh(leftLobe, material);
leftMesh.position.x = -0.5;
leftMesh.position.y = 0.5;

const rightMesh = new THREE.Mesh(rightLobe, material);
rightMesh.position.x = 0.5;
rightMesh.position.y = 0.5;

const bottomMesh = new THREE.Mesh(bottom, material);
bottomMesh.rotation.z = Math.PI;
bottomMesh.position.y = -0.2;

heartGroup.add(leftMesh);
heartGroup.add(rightMesh);
heartGroup.add(bottomMesh);

// Add "veins" or tech details for a modern look
const techMaterial = new THREE.MeshPhongMaterial({ color: 0x00A3BF, emissive: 0x003344 });
for(let i = 0; i < 5; i++) {
    const ring = new THREE.TorusGeometry(1.2, 0.02, 16, 100);
    const ringMesh = new THREE.Mesh(ring, techMaterial);
    ringMesh.rotation.x = Math.random() * Math.PI;
    ringMesh.rotation.y = Math.random() * Math.PI;
    heartGroup.add(ringMesh);
}

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

camera.position.z = 4;

// Animation
function animate() {
    requestAnimationFrame(animate);
    
    // Pulsing effect
    const scale = 1 + Math.sin(Date.now() * 0.003) * 0.05;
    heartGroup.scale.set(scale, scale, scale);
    
    // Rotation
    heartGroup.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

animate();
})();