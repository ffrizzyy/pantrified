"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useMedia";

const CREAM = 0xfaf7f0;
const CREAM_DEEP = 0xe9dfc9;
const GREEN = 0x1f4d3a;
const LEAF = 0x3c7a5b;
const AMBER = 0xb45309;
const TOMATO = 0xc2410c;
const TAN = 0xd9b382;

type Food = {
  mesh: THREE.Mesh;
  baseY: number;
  phase: number;
  spin: number;
};

/**
 * A small still-life of the pantry on a plate. Desktop only, lazy loaded,
 * paused when offscreen or hidden, and rendered as a single frame when the
 * visitor asks for reduced motion.
 */
export default function PantryScene({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 2.9, 5.4);
    camera.lookAt(0, 0.1, 0);

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    host.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    // ------------------------------------------------------------- lighting
    scene.add(new THREE.HemisphereLight(0xfff6e6, 0x2b3a2f, 1.5));

    const key = new THREE.DirectionalLight(0xfff3dd, 2.4);
    key.position.set(3.5, 6, 4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xbfd8c6, 0.7);
    fill.position.set(-4, 2.5, -2);
    scene.add(fill);

    const warm = new THREE.PointLight(AMBER, 14, 12, 2);
    warm.position.set(-2.4, 1.6, 2.4);
    scene.add(warm);

    // ---------------------------------------------------------------- plate
    const plateMat = new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.62, metalness: 0 });
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.42, 0.14, 64), plateMat);
    plate.position.y = 0;
    world.add(plate);

    const inner = new THREE.Mesh(
      new THREE.CylinderGeometry(1.44, 1.44, 0.02, 64),
      new THREE.MeshStandardMaterial({ color: CREAM_DEEP, roughness: 0.8 }),
    );
    inner.position.y = 0.075;
    world.add(inner);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.05, 12, 72),
      new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.45 }),
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.07;
    world.add(rim);

    // ------------------------------------------------------------ soft shadow
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 126);
      gradient.addColorStop(0, "rgba(20, 30, 24, 0.42)");
      gradient.addColorStop(1, "rgba(20, 30, 24, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(5.6, 5.6),
      new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.12;
    world.add(shadow);

    // ----------------------------------------------------------------- food
    const foods: Food[] = [];
    const matte = (color: number, roughness = 0.6) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 });

    const addFood = (
      geometry: THREE.BufferGeometry,
      color: number,
      position: [number, number, number],
      rotation: [number, number, number] = [0, 0, 0],
      scale: [number, number, number] = [1, 1, 1],
      roughness = 0.6,
    ) => {
      const mesh = new THREE.Mesh(geometry, matte(color, roughness));
      mesh.position.set(...position);
      mesh.rotation.set(...rotation);
      mesh.scale.set(...scale);
      world.add(mesh);
      foods.push({ mesh, baseY: position[1], phase: Math.random() * Math.PI * 2, spin: 0.04 + Math.random() * 0.05 });
      return mesh;
    };

    // rice mound in the middle
    addFood(new THREE.SphereGeometry(0.5, 32, 24), CREAM, [0, 0.2, 0], [0, 0, 0], [1, 0.52, 1], 0.85);

    // eggs
    addFood(new THREE.SphereGeometry(0.23, 28, 22), CREAM, [-0.62, 0.24, 0.16], [0.2, 0.4, 0.1], [0.86, 1.08, 0.86], 0.42);
    addFood(new THREE.SphereGeometry(0.23, 28, 22), CREAM, [-0.38, 0.24, -0.42], [-0.2, -0.3, 0.2], [0.86, 1.06, 0.86], 0.42);

    // tomato
    addFood(new THREE.SphereGeometry(0.22, 28, 22), TOMATO, [0.55, 0.22, 0.35], [0, 0, 0], [1, 0.9, 1], 0.5);

    // tempe blocks
    addFood(new THREE.BoxGeometry(0.42, 0.13, 0.28), TAN, [0.34, 0.2, -0.48], [0, 0.5, 0.02], [1, 1, 1], 0.75);
    addFood(new THREE.BoxGeometry(0.42, 0.13, 0.28), TAN, [0.02, 0.2, -0.6], [0, 0.9, 0], [1, 1, 1], 0.75);

    // greens
    addFood(new THREE.SphereGeometry(0.3, 24, 18), LEAF, [-0.18, 0.2, 0.56], [0.3, 0.2, 0.4], [1, 0.24, 0.66], 0.7);
    addFood(new THREE.SphereGeometry(0.26, 24, 18), GREEN, [0.2, 0.2, 0.62], [-0.2, 0.6, -0.3], [1, 0.24, 0.6], 0.7);
    addFood(new THREE.SphereGeometry(0.24, 24, 18), LEAF, [-0.72, 0.2, -0.34], [0.1, 0.9, 0.2], [1, 0.26, 0.62], 0.7);

    // chilli
    addFood(new THREE.CapsuleGeometry(0.06, 0.34, 8, 16), TOMATO, [0.78, 0.16, -0.06], [0.4, 0, 1.35], [1, 1, 1], 0.45);

    // a few scattered grains
    for (let i = 0; i < 9; i += 1) {
      const angle = (i / 9) * Math.PI * 2;
      const radius = 1.12 + Math.sin(i * 2.1) * 0.16;
      addFood(
        new THREE.SphereGeometry(0.035, 10, 8),
        i % 3 === 0 ? AMBER : CREAM,
        [Math.cos(angle) * radius, 0.13, Math.sin(angle) * radius],
        [0, 0, 0],
        [1, 1, 1],
        0.6,
      );
    }

    // ------------------------------------------------------------ interaction
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);

    // ---------------------------------------------------------------- sizing
    const resize = () => {
      const { clientWidth, clientHeight } = host;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    // ------------------------------------------------------------------ loop
    let raf = 0;
    let visible = true;
    let elapsed = 0;
    const timer = new THREE.Timer();
    timer.connect(document);

    const draw = (time: number) => {
      pointer.x += (target.x - pointer.x) * 0.06;
      pointer.y += (target.y - pointer.y) * 0.06;

      world.rotation.y = time * 0.09 + pointer.x * 0.18;
      world.rotation.x = pointer.y * 0.06;
      world.position.y = Math.sin(time * 0.7) * 0.035;

      for (const food of foods) {
        food.mesh.position.y = food.baseY + Math.sin(time * 1.1 + food.phase) * 0.012;
        food.mesh.rotation.y += food.spin * 0.002;
      }

      renderer.render(scene, camera);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      timer.update();
      const delta = Math.min(timer.getDelta(), 0.05);
      if (!visible || document.hidden) return;
      elapsed += delta;
      draw(elapsed);
    };

    if (reduced) {
      draw(0.6);
    } else {
      raf = requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    io.observe(host);

    // ----------------------------------------------------------------- teardown
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      observer.disconnect();
      timer.dispose();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material?.dispose();
      });
      shadowTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === host) host.removeChild(renderer.domElement);
    };
  }, [reduced]);

  return <div ref={hostRef} className={className} />;
}
